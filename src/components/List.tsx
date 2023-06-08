import { Sub } from "../types";

interface Props {
    //Podemos controlar los children asi
//   children: JSX.Element[]
  subs: Array<Sub>;
}

function List({subs}: Props) {
// function List( props: Props ) {

  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick} (<small>{sub.subMonths}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
}

// const List2: React.FunctionComponent<Props> = ({subs}) => {
//     return (
//         <div>Hello</div>
//     )
// }


export default List