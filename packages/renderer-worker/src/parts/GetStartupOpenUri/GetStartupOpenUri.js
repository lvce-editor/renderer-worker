export const getStartupOpenUri = ({ href }) => {
  const url = new URL(href)
  return url.searchParams.get('openUri') || ''
}
