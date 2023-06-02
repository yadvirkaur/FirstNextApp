//Catch-all Segments
//For example, app/docs/[...feature]/page.js will match /docs/feature1, but also /docs/feature1/concept1, /docs/feature1/concept1/example1, and so on.

// optional Catch-all Segments:  by including the parameter in double square brackets: [[...folderName]].
// For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes

export default function Page({ params }) {
   const path = params.feature
    console.log(path)
    if(path){
        if(path.length ===2){
            return <h1>Docs {path[0]} for {path[1]}</h1>
            }
        if(path.length ===1){
        return <h1>Docs {path[0]}</h1>
        }
    }
    return <h1>The Docs home page </h1>
        
}