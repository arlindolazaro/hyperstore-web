# HyperStore — Web

Catálogo online de produtos, sem carrinho nem conta de cliente. Cada produto
tem um botão que abre uma conversa de WhatsApp já com o nome e o preço
preenchidos.

## Stack

- **Next.js** (App Router) — frontend, hospedado no Vercel
- **Firebase Firestore** — base de dados dos produtos (gerida directamente
  pelo Firebase Console, sem painel de administração próprio)

## Estrutura

```
app/            páginas (layout, página inicial, estilos globais)
components/     Header, CategoryNav, Hero, ProductCard, Footer
lib/firebase.js ligação ao Firestore e leitura dos produtos
public/         logo e outros ficheiros estáticos
```

## Configurar o Firebase

1. Cria um projecto em https://console.firebase.google.com
2. Activa o **Firestore Database** (modo produção)
3. Em **Definições do projecto > Geral > As suas apps**, adiciona uma app Web
   e copia as chaves geradas
4. Copia `.env.local.example` para `.env.local` e cola as chaves
5. Nas **Regras do Firestore**, usa:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /produtos/{produtoId} {
         allow read: if true;
         allow write: if false; // só se escreve pelo Firebase Console
       }
     }
   }
   ```

## Adicionar produtos

No Firestore, cria a colecção `produtos` e, para cada produto, um documento
com os campos:

| Campo      | Tipo   | Exemplo                              |
|------------|--------|---------------------------------------|
| nome       | string | "Smartphone Redmi Note 14"           |
| preco      | number | 18500                                 |
| descricao  | string | "128GB, 8GB RAM, câmara 108MP"        |
| imagemUrl  | string | link da imagem (Firebase Storage ou externo) |

## Correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Publicar no Vercel

1. Faz push deste repositório para o GitHub
2. Em vercel.com, "Add New Project" e importa o repositório
3. Em **Environment Variables**, adiciona as mesmas variáveis do
   `.env.local`
4. Deploy

## Ligar o domínio

Em Vercel: **Project > Settings > Domains**, adiciona o domínio comprado e
segue as instruções de DNS apresentadas.

## Por fazer

- [ ] Substituir `NEXT_PUBLIC_WHATSAPP_NUMBER` pelo número real da loja
- [ ] Substituir textos placeholder do footer (email, redes sociais)
- [ ] Adicionar produtos reais no Firestore
