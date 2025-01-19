type dataUser = {
    name: string;
    unit: string;
    nik: number;
}

const CardUser = (props : dataUser) => {
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <p>{props.unit}</p>
                <p>{props.nik}</p>
                <div style={{gap: '10px', display: 'flex'}}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}

export default CardUser;