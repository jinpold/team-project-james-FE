export default function ArticleColumns(props : IArticle) {
 return [ 
       <tr key={props.id}>
       <td>{props.title}</td>
       <td>{props.content}</td>
       <td>{props.writer}</td>
       <td>{props.registerDate}</td>
       </tr>];
}