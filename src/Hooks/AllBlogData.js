import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Maximizando a Eficiência no Desenvolvimento Full-Stack: A Sinergia entre NextJS e TRPC",
      commentor: "Carlos",
      date: "25 Novembro 2023",
      tag: "NextJS, TRPC, Full-Stack, Web Development",
      descriptions: [
        "A integração de NextJS e TRPC está transformando o cenário do desenvolvimento full-stack, oferecendo uma solução eficiente e elegante para a construção de aplicações web modernas. NextJS, com sua arquitetura híbrida, facilita o desenvolvimento de páginas renderizadas no servidor (SSR) e estáticas (SSG), enquanto TRPC permite a criação de APIs tipo-safe sem a necessidade de definir schemas ou gerar clientes.",
        "A união dessas tecnologias oferece um fluxo de trabalho otimizado, permitindo aos desenvolvedores focar na lógica do negócio ao invés de se preocuparem com a verbosidade e complexidade da criação de APIs REST ou GraphQL. Com TRPC, a comunicação entre o frontend e o backend torna-se mais fluída, eliminando muitos dos desafios comuns na tipagem de dados e validação.",
        `<pre><code>// Integração TRPC com NextJS
    import { createRouter } from 'trpc/server';
    import { appRouter } from './routers/_app';
    
    const trpcRouter = createRouter()
      .merge('app.', appRouter);
    
    export default trpcRouter;
    </code></pre>`,
        "Esta combinação também impulsiona a performance e a segurança das aplicações. NextJS oferece otimizações automáticas e uma vasta gama de plugins, enquanto TRPC garante a segurança tipo-safe em tempo de compilação, reduzindo os erros em runtime e aumentando a confiabilidade do código.",
        "Além disso, a integração de TRPC com NextJS abre portas para padrões arquiteturais mais avançados, como microservices e serverless, simplificando a adoção desses paradigmas em projetos de diferentes escalas. A capacidade de desenvolver APIs rápidas e eficientes com TRPC, juntamente com a flexibilidade e poder de NextJS, cria um ecossistema propício para inovação e eficiência no desenvolvimento web.",
        "Concluindo, a combinação de NextJS e TRPC representa um marco no desenvolvimento full-stack, oferecendo uma abordagem moderna, escalável e eficiente, perfeitamente alinhada com as demandas de projetos web atuais e futuros."
      ],
      quoteIndices: [1, 4],
    }
  ];


  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
