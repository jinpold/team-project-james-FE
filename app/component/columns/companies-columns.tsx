export default function CompaniesColumns(props: ICompanies) {
    return (<tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
    </tr>
    )
};