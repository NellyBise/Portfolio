// components/ArticleImage.jsx
export default function ArticleImage({ src, alt }) {
  return (
    <figure>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
