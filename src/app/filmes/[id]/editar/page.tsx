import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilme } from "@/services/filme.services";

//Next16 +
interface Props {
  params: Promise<{id : string}>
}

export default async function EditarFilmePage({ params}: Props) {

  const {id} = await params;

  const filme = await getFilme(id);

  return (
    <FilmeForm filme={filme}/>
  );
}