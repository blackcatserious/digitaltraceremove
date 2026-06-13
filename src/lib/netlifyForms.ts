// Helper for submitting forms to Netlify Forms from a client-rendered SPA.
//
// Netlify detects forms at build time from static HTML, so each form handled
// here must also have a matching hidden static form in index.html (with the
// same `name` and field names). At runtime we POST the values as
// url-encoded data to the site root, which Netlify intercepts.

const encode = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export const submitNetlifyForm = async (
  formName: string,
  fields: Record<string, string>
): Promise<boolean> => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...fields }),
    })
    return response.ok
  } catch {
    return false
  }
}
