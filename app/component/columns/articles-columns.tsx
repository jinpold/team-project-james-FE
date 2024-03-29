import { GridColDef } from "@mui/x-data-grid";

export default function ArticlesColumns(props: IArticles) : GridColDef[] {
    return (
        // <tr key={props.id}>
        //     <td>{props.title}</td>
        //     <td>{props.content}</td>
        //     <td>{props.writer}</td>
        //     <td>{props.registerDate}</td>
        // </tr>
        [
            // { field: 'id', headerName: 'ID', width: 90 },
            {
                field: props.title,
                headerName: '제목',
                width: 150,
                editable: true,
            },
            {
                field: props.content,
                headerName: ' 내용',
                width: 150,
                editable: true,
            },
            {
                field: props.writer,
                headerName: '작성자',
                width: 110,
                editable: true,
            },
            {
                field: props.registerDate,
                headerName: '작성일자',
                editable: true,
                width: 160,
                //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
            },
        ])
}
