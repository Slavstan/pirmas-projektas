function ServiceCard({ name, description, url }) {
  return (
    <a
      className="service-card"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="service-card-name">{name}</span>
      <span className="service-card-description">{description}</span>
      <span className="service-card-link">Atidaryti ↗</span>
    </a>
  )
}

export default ServiceCard
