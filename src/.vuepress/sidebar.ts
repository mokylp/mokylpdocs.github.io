import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "测试基础",
      icon: "book",
      prefix: "测试基础/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "自动化测试",
      icon: "robot",
      prefix: "自动化测试/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "接口测试",
      icon: "plug",
      prefix: "接口测试/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "性能测试",
      icon: "chart-line",
      prefix: "性能测试/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "测试工具",
      icon: "toolbox",
      prefix: "测试工具/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "编程语言",
      icon: "code",
      prefix: "编程语言/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "数据库测试",
      icon: "database",
      prefix: "数据库测试/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "测试面试",
      icon: "user-tie",
      prefix: "测试面试/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "职场成长",
      icon: "seedling",
      prefix: "职场成长/",
      collapsible: true,
      children: "structure"
    }
  ],
});
