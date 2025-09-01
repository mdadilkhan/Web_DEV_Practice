

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;


  if (slug?.length === 2) {
    return <h1>slug length 2</h1>;
  }

    if (slug?.length === 1) {
    return <h1>slug length 1</h1>;
  }

  return <div>docks page inside docs folder</div>;
};

export default page;



// const Docs=async({params,}:{params:Promise<{slug:string[]}>})=>{

//   const {slug}=await params

//   console.log(slug);
  
//   return <div>inisde docs</div>
// }


// export default Docs