//With Next 13.3 you just need to change the file name to not-found.js.
//An app/not-found.js file will now automatically handle visits to an URL that does not have a matching route in your app.

export default function Page() {
    return <h1>404 page with custom styling</h1>;
  }