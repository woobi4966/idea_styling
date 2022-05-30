import { useEffect, useState } from 'react';

// json-server로 부터  json을 받아오는 customHook
export default function useFetch(url) {

    const [data, setData] = useState([]);

    // useEffect는 DOM이 브라우저에 mount 된 후에 실행된다.
    // 의존 배열에 url을 넣었으므로 url이 변할 떄마다
    // 이 훅이 자동적으로 다른 데이터를 가져오게 된다.
    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    }, [url]);

    return data;
}