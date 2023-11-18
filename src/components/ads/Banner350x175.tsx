import Image from "next/image";

export default function Banner350x175() {
  return (
    <a
      href="https://cutt.ly/curso-django"
      target="_blank"
      className="bg-zinc-700 hover:bg-zinc-600 transition-colors p-2 rounded-lg my-4 mx-0 max-w-[350px] shadow-md self-center"
    >
      <Image
        src="/curso-django.png"
        alt="curso-django"
        width={350}
        height={175}
        className="rounded-md"
      />
      <p className="truncate text-sm mt-1">Curso de Desenvolvimento Web com Python e Django.</p>
    </a>
  );
}
