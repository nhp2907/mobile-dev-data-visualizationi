import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {DataTable} from 'react-native-paper';

function SortingTable({}) {
    const [codeSortDirection, setCodeSortDirection] = useState('descending')
    const [nameSortDirection, setNameSortDirection] = useState('descending')

    const data = [
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "01",
            "name": "Hà Nội",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "02",
            "name": "Hà Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "04",
            "name": "Cao Bằng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "06",
            "name": "Bắc Kạn",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "08",
            "name": "Tuyên Quang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "10",
            "name": "Lào Cai",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "11",
            "name": "Điện Biên",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "12",
            "name": "Lai Châu",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "14",
            "name": "Sơn La",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "15",
            "name": "Yên Bái",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "17",
            "name": "Hòa Bình",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "19",
            "name": "Thái Nguyên",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "20",
            "name": "Lạng Sơn",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "22",
            "name": "Quảng Ninh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "24",
            "name": "Bắc Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "25",
            "name": "Phú Thọ",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "26",
            "name": "Vĩnh Phúc",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "27",
            "name": "Bắc Ninh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "30",
            "name": "Hải Dương",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "31",
            "name": "Hải Phòng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "33",
            "name": "Hưng Yên",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "34",
            "name": "Thái Bình",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "35",
            "name": "Hà Nam",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "36",
            "name": "Nam Định",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "37",
            "name": "Ninh Bình",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "38",
            "name": "Thanh Hóa",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "40",
            "name": "Nghệ An",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "42",
            "name": "Hà Tĩnh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "44",
            "name": "Quảng Bình",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "45",
            "name": "Quảng Trị",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "46",
            "name": "Thừa Thiên Huế",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "48",
            "name": "Đà Nẵng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "49",
            "name": "Quảng Nam",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "51",
            "name": "Quảng Ngãi",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "52",
            "name": "Bình Định",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "54",
            "name": "Phú Yên",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "56",
            "name": "Khánh Hòa",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "58",
            "name": "Ninh Thuận",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "60",
            "name": "Bình Thuận",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "62",
            "name": "Kon Tum",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "64",
            "name": "Gia Lai",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "66",
            "name": "Đắk Lắk",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "67",
            "name": "Đắk Nông",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "68",
            "name": "Lâm Đồng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "70",
            "name": "Bình Phước",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "72",
            "name": "Tây Ninh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "74",
            "name": "Bình Dương",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "75",
            "name": "Đồng Nai",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "77",
            "name": "Bà Rịa - Vũng Tàu",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "79",
            "name": "Thành Phố Hồ Chí Minh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "80",
            "name": "Long An",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "82",
            "name": "Tiền Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "83",
            "name": "Bến Tre",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "84",
            "name": "Trà Vinh",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "86",
            "name": "Vĩnh Long",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "87",
            "name": "Đồng Tháp",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "89",
            "name": "An Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "91",
            "name": "Kiên Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "92",
            "name": "Cần Thơ",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "93",
            "name": "Hậu Giang",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "94",
            "name": "Sóc Trăng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "95",
            "name": "Bạc Liêu",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "96",
            "name": "Cà Mau",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "99",
            "name": "Khác",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "100",
            "name": "Campuchia",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "97",
            "name": "Bộ Quốc phòng",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "98",
            "name": "Công An nhân dân",
            "status": 1
        },
        {
            "parent": "VN",
            "sourceUpdateTime": 1611075810745,
            "description": null,
            "applyDate": null,
            "code": "KXD",
            "name": " .",
            "status": 1
        }
    ]
    const totalItems = data.length;
    const PAGE_SIZE = 15;
    const [showData, setShowData] = useState(data.slice(0, PAGE_SIZE - 1))

    const [page, setPage] = useState(1)
    const to = (page + 1) * PAGE_SIZE;
    const from = page * PAGE_SIZE;


    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title sortDirection={codeSortDirection}
                                 onPress={() => {
                                     setCodeSortDirection(codeSortDirection === "descending" ? "ascending" : "descending");
                                     setShowData(showData.sort((a, b) => {
                                         let r = undefined;
                                         if (a.code < b.code) {
                                             r = -1;
                                         } else if (a.code === b.code) {
                                             r = 0;
                                         }
                                         r = 1;
                                         return r * codeSortDirection === "descending" ? 1 : -1;
                                     }))
                                     console.log(showData);
                                 }}
                >code</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Epoch time</DataTable.Title>
            </DataTable.Header>
            {
                showData.map(d => (
                    <DataTable.Row id={d.code}>
                        <DataTable.Cell>{d.code}</DataTable.Cell>
                        <DataTable.Cell>{d.name}</DataTable.Cell>
                        <DataTable.Cell>{d.sourceUpdateTime}</DataTable.Cell>
                    </DataTable.Row>
                ))
            }

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(totalItems / PAGE_SIZE)}
                onPageChange={(page) => {
                    setPage(page);
                    console.log(page * PAGE_SIZE);
                    setShowData(data.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE))
                }}
                label={`${from + 1}-${to} of ${Math.ceil(data.length)}`}
            />
        </DataTable>
    );
}


const styles = StyleSheet.create({
    container: {}
})

export default SortingTable;