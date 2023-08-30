class Restaurants {
  tag: string
  image: string
  titulo: string
  avaliacao: number
  descricao: string
  id: number

  constructor (
    id: number,
    tag: string,
    image: string,
    titulo: string,
    avaliacao: number,
    descricao: string,
    ) {
      this.id = id
      this.tag = tag
      this.image = image
      this.titulo = titulo
      this.avaliacao = avaliacao
      this.descricao = descricao
    }
}

export default Restaurants