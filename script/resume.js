Vue.createApp({
  data() {
    return {
      career: [
        {
          job: "前端工程师",
          value:
            "熟悉HTML5、CSS3等前端知识，独立完成前端页面开发布局；\n掌握JavaScript、es6语法，可完成数据逻辑处理和交互效果；",},
        { job: "项目经历", project: "排班表", value: "页面分为头像、标题、日历和说明四个模块；\n通过flex布局、position、animation等css属性使页面简洁美观；\n通过JS设置完成各个模块的用户交互。" },
        {project: "消除小游戏",value: "页面分为封面、游戏中两个页面；\n通过循环、计时等js函数实现消除玩法。",},
        {project: "项目通过此页面左下角博客链接即可体验",value: "博客在github，网络可能比较慢，口令为'77'"}
      ],
      leftInf: [
        { name: "年龄", value: "26" },
        { name: "性别", value: "女性" },
        { name: "民族", value: "汉族" },
        { name: "地址", value: "广州番禺" },
      ],
      leftSkil: [
        { name: "HTML5+CSS3" },
        { name: "JS+VUE" },
        { name: "CET-4" },
        { name: "初级会计职称" },
      ],
      leftContact: [
        { name: "电话", value: "13672462278" },
        { name: "邮箱", value: "1016641979@qq.com" },
        { name: "博客", value: "https://qiqiv.github.io/qiqiarr.io/" },
      ],
      educate: [
        {
          time: "自学考试",
          school: "华南农业大学",
          major: "会计学",
          descript:
            "主修课程：统计学、经济学、管理学、审计学原理、财务会计等；\n已通过学位英语和主修课程考试，预计2023年领取毕业证和学位证。",
        },
        {
          time: "2014.9-2016.6",
          school: "番禺职业技术学院",
          major: "商务英语",
          descript:
            "主修课程：商务英语、国际贸易、国际金融、西方经济学等；\n大学期间通过自学，参加并通过了初级会计职称考试、大学英语四级考试。",
        },
      ],
      careerExp: [
        {
          time: "2019.8-2022.1",
          ltd: "广东南油对外服务有限公司",
          job: "薪税专员",
          descript:
            "每月为200+客户（互联网、房地产、金融、航空等行业）提供薪税服务；\n为16家客户编写vba数据处理程序，提高考勤、薪税数据的处理效率。",
        },
        {
          time: "2017.11-2019.5",
          ltd: "汇丰银行(中国)有限公司",
          job: "客户服务主任",
          descript:
            "为客户提供专业的服务及解决方案，处理客户投诉；\n发掘潜在客户，根据客户资产配置需求推介合适的产品；\n负责新人培训后的上岗QM，协助主管分配工作任务；\n收集每日咨询情况，每周编制访客流量分析表；",
        },
        {
          time: "2016.3-2017.6",
          ltd: "美心食品有限公司",
          job: "会计助理",
          descript:
            "核对银行往来账项及票据结算，制作会计凭证；\n分析收入数据，按时提交分析报告；\n协助编制公司总帐、明细帐；",
        },
      ],
    };
  },
}).mount("#container");
