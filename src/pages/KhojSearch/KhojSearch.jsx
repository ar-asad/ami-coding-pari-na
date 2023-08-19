import { useState } from "react";


const KhojSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState("");
    // console.log(inputValue)
    // console.log(searchValue)
    console.log(result);

    const handleSearchInteger = (event) => {
        event.preventDefault();
        const inputValueArray = inputValue.split(',');
        const result = inputValueArray.includes(searchValue);
        console.log(inputValueArray);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input_values: inputValue })
        };
        fetch('http://localhost:5000/search', requestOptions)
            .then(data => {
                console.log(data)
            });
        if (result) {
            setResult("true")
            return;
        }
        else {
            setResult("false")
            return;
        }
    }


    return (
        <div style={{ marginBottom: "540px" }} className="pt-32">
            <form onSubmit={handleSearchInteger} className="w-1/2 mx-auto">
                <div className="mb-14  text-center text-xl font-medium">Result : {result}</div>
                <div className="mb-16 ">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Give your comma separated integers input" className="pb-2 outline-0 border-green-600 w-full border-x-0 ps-2 border-t-0 border-2" />
                </div>
                <div>
                    <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Give your only one integer input" className="pb-2 outline-0 border-green-600 w-full border-x-0 mb-8 ps-2 border-t-0 border-2" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline border-b-4 border-x-0 border-t-0 btn-success">Search Value</button>
                </div>
            </form>
        </div>
    );
};

export default KhojSearch;