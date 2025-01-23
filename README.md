# back-gyn-prisma

npm i prisma -D

npx prisma init

npx prisma generate (cria as tipagens para a model criada no schema do prisma )

npm install @prisma/client

cria e atualiza migrates em desenvolvimento
npx prisma migrate dev

cria em produção 
npx prisma migrate deploy

suport do prisma para ver as tabelas
npx prisma studio



npm i vitest vite-tsconfig-paths -D
vitest similar ao jest 
vite-tsconfig-paths para compreender alias como @

 "test": "vitest run",  só roda os testes
 "test:watch": "vitest"  foda e fica obsevando

 npm i vitest-coverage-c8 

  