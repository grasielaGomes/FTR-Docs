
import { initializeTracing } from './tracing.js';
await initializeTracing()

import { trace, context } from '@opentelemetry/api';

import Fastify from 'fastify';
import { connect, seedDb } from './db.js'
const PORT = 8080;

const app = Fastify({ logger: true });
const _db = await connect()
await seedDb(_db)

let contador = 0
app.get('/alunos', async (request, reply) => {

    const span = trace.getSpan(context.active())
    ++contador;
    if (contador === 1) {
        const alunos = await _db('alunos').select('*')
        for (const aluno of alunos) {
            const curso = await _db('cursos').select('*').where({ id: aluno.cursoId }).first()
            aluno.curso = curso.nome
            delete aluno.cursoId
        }

        const payload = {
            alunos,
            message: "Este é um response bem ruim"
        }
        span.setAttribute('http.response_payload', JSON.stringify(payload))

        return reply
            .status(202)
            .send(payload);
    }

    if (contador === 2) {

        const alunos = await _db('alunos')
            .select('alunos.id', 'alunos.nome', 'cursos.nome as curso')
            .innerJoin('cursos', 'cursos.id', 'alunos.cursoId');
        const payload = {
            alunos,
            message: 'Este é um response bem melhor!'
        }
        span.setAttribute('http.response_payload', JSON.stringify(payload))


        return reply.send(payload)
    }

    contador = 0
    return reply.status(401).send({ message: '401 - Reponse com codigo diferente!' })
});

const address = await app.listen({ port: PORT })
console.log(`Servidor executando em ${address}`);

