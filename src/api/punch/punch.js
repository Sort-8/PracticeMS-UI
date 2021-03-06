import request from '@/utils/request'

// 查询打卡签到列表
export function listPunch(query) {
  return request({
    url: '/punch/punch/list',
    method: 'get',
    params: query
  })
}

// 查询打卡签到详细
export function getPunch(attendanceId) {
  return request({
    url: '/punch/punch/' + attendanceId,
    method: 'get'
  })
}

// 新增打卡签到
export function addPunch(address) {
  // console.log("添加的地址是"+address)
  return request({
    url: '/punch/punch/addPunch?address='+address,
    method: 'get'
    // data: data
  })
}

// 修改打卡签到
export function updatePunch(data) {
  return request({
    url: '/punch/punch',
    method: 'put',
    data: data
  })
}

// 删除打卡签到
export function delPunch(attendanceId) {
  return request({
    url: '/punch/punch/' + attendanceId,
    method: 'delete'
  })
}

// 导出打卡签到
export function exportPunch(query) {
  return request({
    url: '/punch/punch/export',
    method: 'get',
    params: query
  })
}
// 导出归档打卡签到
export function exportArchivedPunch(query) {
  return request({
    url: '/punch/punch/exportArchived',
    method: 'get',
    params: query
  })
}


// 获得当天的打卡签到人数
export function getTodayPunchList() {
  return request({
    url: '/punch/punch/getTodayPunchList',
    method: 'get'
  })
}

// 获得获取本周每日的打卡情况
export function selectNowWeekAttendanceList() {
  return request({
    url: '/punch/punch/selectNowWeekAttendanceList',
    method: 'get'
  })
}
// 查询打卡签到列表
export function archivedList(query) {
  return request({
    url: '/punch/punch/archivedList',
    method: 'get',
    params: query
  })
}

