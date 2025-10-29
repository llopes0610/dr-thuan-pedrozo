export function buildWhatsAppLink(text: string) {
  const phone = process.env.WHATSAPP_PHONE || ''
  const msg = encodeURIComponent(text)
  return `https://wa.me/${phone}?text=${msg}`
}
