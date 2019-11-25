import Mock from 'mockjs'
const vehicle = Mock.mock('/activity_game/getActivityList', 'post', (req, res) => {
  return {
    rows: [{
      'uuid': '20191113_130737_GKML',
      'desc_activity': '最美巴蜀女大学生选拔赛',
      'time_from_baoming': '2019-11-13 13:07',
      'time_to_baoming': '2019-12-13 13:07',
      'time_from_xuanba': '2019-11-13 13:07',
      'time_to_xuanba': '2019-12-13 13:07',
      'count_max': 1000,
      'category_activity': 0,
      'comments': '',
      'url_pic_activity': '',
      'actual_count': 0,
      'actula_status': 0,
      'rule_activity': '<span style=\'font-family:&quot;font-size:14px;background-color:#FFE48D;\'>最美巴蜀女大学生选拔赛</span>',
      'is_baoming': 0,
      'shenhe_status': 0,
      'activity_url': null
    },
    {
      'uuid': '20191012_160805_THHC',
      'desc_activity': '金色天使',
      'time_from_baoming': '2019-10-14 09:58',
      'time_to_baoming': '2019-11-10 16:08',
      'time_from_xuanba': '2019-11-10 16:08',
      'time_to_xuanba': '2019-11-23 16:08',
      'count_max': 10000,
      'category_activity': 0,
      'comments': '',
      'url_pic_activity': 'Upload/huodong/20191012_160805_THHC/hdconfig/20191014112306_HCMLKR.jpg',
      'actual_count': 0,
      'actula_status': 0,
      'rule_activity': '&nbsp; &nbsp;',
      'is_baoming': 0,
      'shenhe_status': 0,
      'activity_url': null
    }

    ]}
}
)

export default {
  vehicle
}
