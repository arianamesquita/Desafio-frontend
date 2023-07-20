
interface TransferProperties{
    data: string;
    value: number;
    type: string,
    name: string
}

export function CreateTransfersList({data, value, type, name}: TransferProperties){

    return(
        <div>
            <table>
                <tr>
                    <th>{data}</th>
                    <th>{value}</th>
                    <th>{type}</th>
                    <th>{name}</th>
                </tr>
            </table>
        </div>
    )

}