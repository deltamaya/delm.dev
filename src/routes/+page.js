
async function getRecentBlogs() {
  return fetch('https://blog.delm.dev/rss')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(xmlText => {
      // Parse XML string into a DOM object
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

      // Check for XML parsing errors
      const parserError = xmlDoc.querySelector('parsererror');
      if (parserError) {
        throw new Error('Error parsing RSS XML');
      }

      // Extract all <item> elements
      const items = xmlDoc.querySelectorAll('channel > item');
      const blogs = [];

      // Process each item into a blog post object
      items.forEach(item => {
        const blog = {
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || ''
        };
        blogs.push(blog);
      });

      return blogs;
    })
    .catch(error => {
      console.error('Error fetching or parsing RSS feed:', error);
      return []; // Return empty array on error
    });
}
export async function load() {
	return {
		blogs:await getRecentBlogs()
	};
}
