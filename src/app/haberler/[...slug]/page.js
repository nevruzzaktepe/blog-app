export default function Page(p) {
    return(
        <div>
            <h1>Habere Ait Bilgiler</h1>
            {p.params.slug.map((item)=>{
          return(
            <h2 key={item}>{item}</h2>
          )
            })}
        </div>
    )
}