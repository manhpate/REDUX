
export const addThuMuc = (data) => {
    return {
        type: 'themCacMuc/them',
        payload: data,
    }
}

export const searchFilterChange = (textSearch) => {
    return {
        type: 'cacThaoTacTimKiem/thaydoitimkiem',
        payload: textSearch,
    }
}

export const searchTheo_mucLuaChon_Change = (mucLuaChon) => {
    return {
        type: 'cacThaoTacTimKiem/searchTheo_mucLuaChon_Change',
        payload: mucLuaChon,
    }
}