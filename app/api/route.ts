import { cookies } from "next/headers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(
  request: Request
  // { params }: { params: { slug: string } }
) {
  // dynamic routing params slug is accessable if using route handler in the dynamic route segment folder
  //   const slug = params.slug; // 'a', 'b', or 'c'

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  //   if using NextRequest acces as param can access searchparams like below
  //   const searchParams = request.nextUrl.searchParams
  //   const query = searchParams.get('query')

  // using cookies
//   const cookieStore = cookies();
//   const token = cookieStore.get("token");

  // if using NextRequest as param can access cookies like below
  // const token = request.cookies.get('token')

  // using headers
//   const headersList = headers();
//   const referer = headersList.get("referer");

  // if using NextRequest as param can access headers like below
  // const requestHeaders = new Headers(request.headers)

  return Response.json({ id });

  // can modify response
  //   return new Response("Hello, Next.js!", {
  //     status: 200,
  //     headers: { "Set-Cookie": `token=${token.value}` },
  //   });

  // redirect to some other page
  // redirect('https://nextjs.org/')
}

export async function POST(request: Request) {
  const res = await request.json();

  // request body as form data
  //   const formData = await request.formData()
  //   const name = formData.get('name')
  //   const email = formData.get('email')

  return Response.json({ res });
}

// route segment configurattion
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
