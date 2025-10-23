// Cloudflare Pages Functions middleware for SPA routing
interface CloudflareContext {
  request: Request;
  next: () => Promise<Response>;
  env: {
    ASSETS: {
      fetch: (url: URL | string) => Promise<Response>;
    };
  };
}

export async function onRequest(context: CloudflareContext) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  
  // Skip middleware for static assets
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|json|xml|txt|css|js|woff|woff2|ttf|eot)$/i)
  ) {
    return next();
  }
  
  // For all other routes, serve index.html (SPA fallback)
  try {
    const response = await next();
    
    // If the response is a 404, serve index.html instead
    if (response.status === 404) {
      const indexResponse = await env.ASSETS.fetch(new URL('/index.html', request.url));
      return new Response(indexResponse.body, {
        ...indexResponse,
        status: 200,
        headers: indexResponse.headers,
      });
    }
    
    return response;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // If there's an error, try to serve index.html
    const indexResponse = await env.ASSETS.fetch(new URL('/index.html', request.url));
    return new Response(indexResponse.body, {
      ...indexResponse,
      status: 200,
      headers: indexResponse.headers,
    });
  }
}
