import { Input } from 'antd';


const { Search } = Input;



const SearchInput = ({ onSearch= ()=>{} }) =>(
    <Search 
        placeholder="Aree you looking for an amazing song/artist?" 
        onSearch={onSearch} 
        enterButton />
)


export default SearchInput