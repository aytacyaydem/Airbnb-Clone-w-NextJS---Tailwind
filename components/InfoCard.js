function InfoCard({item : {
    img,
    location,
    description,
    title,
    star,
    long,
    lat,
    price,
    total
  },...restProps}) {
    return (
        <div {...restProps}>
            This is infocard
        </div>
    )
}

export {InfoCard}
