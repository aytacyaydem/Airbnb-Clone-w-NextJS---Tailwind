function Widget({children}) {
    return (
        <section className="pt-5">  
            {children}
        </section>
    )
}

function Title({children}){
    return (
        <h2 className="text-4xl font-semibold pb-5">{children}</h2>
    )
}

function Content({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

Widget.Title = Title
Widget.Content = Content

export {Widget}
