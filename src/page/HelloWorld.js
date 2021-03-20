import { Button, Card, Slider, Progress, Input  } from 'antd'
import MyInput from './MyInput'
import Test from './test'
import { useState } from 'react'
export default () => {
    const style = {
        width: "300px",
        margin: "30px",
        boxShadow: "0 4px 8px rgaa(0,0,0,0.2)",
        border: '1px solid #e8e8e8'
    }
    const aStyle = {
        userSelect: 'none'
    }
    let disabled = false
    const [value, setvalue] = useState(10)
    const onChangeEvent = (e) => {
       const num = e.target.value
       if(!isNaN(num)) {
        setvalue(num)
       }
    }
    const addVal = () => {
        setvalue(value+1)
    }
    const reasetVal = () => {
        setvalue(0)
    }
    return (
        <Card style={style} actions={[<a style={aStyle} onClick={addVal}>add</a>, <a style={aStyle} onClick={reasetVal}>res</a>]}>
            <Card.Meta
                avatar={<img 
                alt=""
                style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                />}
                title="Alipay"
                description="在中台产品的研发过程中"
            />
            <Slider value={value} defaultValue={value} disabled={disabled} />
            <Input onChange={onChangeEvent} value={value} defaultValue={value} />
            <Progress type="line" size="small" percent={value}></Progress>
            {/* <Test value={value}></Test> */}
        </Card>
    )
}