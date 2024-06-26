import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";
import { FilterField } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return(
        <div>
            <FilterField id="standard-basic" label="Введіть ім'я студента" variant="standard" type="text" value={filter} 
            onChange={e => dispatch(updateFilter(e.target.value))} style={{width: "600px"}}/>
        </div>
    )
}