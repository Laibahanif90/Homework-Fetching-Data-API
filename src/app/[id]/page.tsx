const DynamicUser = async (props: any ) => {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
    const response = await url.json()
    console.log("Single User", response)
    return (
        <h1 className="text-7xl">
            Dynammic Route <br /> <br />
            {response.name}
        </h1>
    )
}
export default DynamicUser;