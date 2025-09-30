import knex from 'knex'

export async function connect() {
    const db = knex({
        client: 'pg',
        connection: 'postgres://lucasmonteiro:lucas@localhost:5432/rocketseat',
        searchPath: ['knex', 'public'],
    })

    await db.raw('SELECT 1 as result')
    return db
}

export async function seedDb(db) {
    await db.schema.dropTableIfExists('alunos');
    await db.schema.dropTableIfExists('cursos');

    await db.schema.createTable('cursos', function (table) {
        table.increments('id').primary();
        table.string('nome');
    });

    await db.schema
        .createTable('alunos', (table) => {
            table.increments('id').primary();
            table.string('nome');
            table.integer('cursoId');

            table
                .foreign('cursoId')
                .references('cursos.id')
                .withKeyName('fk_fkey_cursos');
        })

    await db('cursos')
        .insert([
            { nome: 'Monitoramento e Tracing' },
            { nome: 'Microservicos Nodejs' }

        ]);
    await db('alunos')
        .insert([
            { nome: 'Lucas Monteiro', cursoId: 1 },
            { nome: 'Joana Silva', cursoId: 2 },

        ]);
    const [cursos, alunos] = await Promise.all(
        [
            db('cursos').select('*'),
            db('alunos').select('*'),
        ]
    )

    console.log({ cursos, alunos })
}