export default function GoogleMap() {
  return (
    <div className="w-full h-[250px] rounded-lg overflow-hidden border border-gray-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.0123033893!2d11.275443376592837!3d44.47799767899378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd5639cfb0eb1%3A0x52058c9123e817a8!2s51%E5%8C%BA%20Salone%20Area%2051!5e0!3m2!1sit!2sit!4v1714323456789!5m2!1sit!2sit"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
