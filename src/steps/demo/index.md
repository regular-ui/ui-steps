## 示例
### 基本形式

<div class="m-example"></div>

```xml
<steps>
    <step title="Step0">Content0</step>
    <step title="Step1">Content1</step>
    <step title="Step2">Content2</step>
    <step title="Step3">Content3</step>
</steps>
```

### current

<div class="m-example"></div>

```xml
<steps current=2>
    <step title="Step0">Content0</step>
    <step title="Step1">Content1</step>
    <step title="Step2">Content2</step>
    <step title="Step3">Content3</step>
</steps>
```

### 隐藏某一项

<div class="m-example"></div>

```xml
<steps current=2>
    <step title="Step0">Content0</step>
    <step title="Step1" visible={false}>Content1</step>
    <step title="Step2">Content2</step>
    <step title="Step3">Content3</step>
</steps>
```

### 标题模板自定义

<div class="m-example"></div>

```xml
<steps current=1 titleTemplate={@(this.titleTemplate)}>
    <step title="Step1" success={true}>Content1</step>
    <step title="Step2" success={true}>Content2</step>
    <step title="Step3">Content3</step>
    <step title="Step4">Content4</step>
</steps>
```

```javascript
let component = new RGUI.Component({
    template,
    titleTemplate: `<span>{item.data.title} {#if item.data.success}<i class="u-icon u-icon-check-circle"></i>{/if}</span>`
});
```

### 数据绑定

<div class="m-example"></div>

```xml
<steps current={current}>
    <step title="Step0">Content0</step>
    <step title="Step1">Content1</step>
    <step title="Step2">Content2</step>
    <step title="Step3">Content3</step>
</steps>
<p><span>当前页：{current}</span></p>
<a class="u-btn u-btn-info" on-click={current -= 1}>上一页</a>
<a class="u-btn u-btn-info" on-click={current += 1}>下一页</a>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {current: 2},
});
```

### 事件

请打开浏览器的控制台查看结果。

<div class="m-example"></div>

```xml
<steps current={2} on-select={console.log('on-select:', '$event.current:', $event.current)}
      on-change={console.log('on-change:', '$event.current:', $event.current)}>
    <step title="Step0">Content0</step>
    <step title="Step1">Content1</step>
    <step title="Step2">Content2</step>
    <step title="Step3">Content3</step>
</steps>
```
