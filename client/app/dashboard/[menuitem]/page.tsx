function page({ params }: { params: { menuitem: string } }) {
  return <div>This is {params.menuitem} page</div>;
}

export default page;
