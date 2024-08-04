import { ComponentType } from '@/packages/types';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { RingProgress } from '@ant-design/plots';
import { handleApi } from '@/packages/utils/handleApi';
import { Spin } from 'antd';
import { usePageStore } from '@/stores/pageStore';

/**
 *
 * @param config 组件配置属性值
 * @param props 系统属性值：componentid、componentname等
 * @returns 返回组件
 */
const MRingProgress = ({ id, type, config }: ComponentType, ref: any) => {
  const [data, setData] = useState<string | number>(0);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const variableData = usePageStore((state) => state.page.variableData);
  useEffect(() => {
    getDataList({});
  }, [config.api, config.api?.sourceType == 'variable' ? variableData : '']);

  const getDataList = (data: any) => {
    setLoading(true);
    handleApi(config.api, data).then((res) => {
      if (res?.ret === 0) {
        if (typeof res.data === 'number') {
          setData(res.data);
        } else {
          console.error('数据格式错误，进度条需要0-1的数字。');
        }
      }
      setLoading(false);
    });
  };
  useImperativeHandle(ref, () => {
    return {
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
      update: (data: any) => {
        // 重新加载表格数据
        getDataList(data);
      },
    };
  });
  return (
    visible && (
      <div data-id={id} data-type={type} style={config.style}>
        <Spin spinning={loading} size="large" wrapperClassName="spin-loading">
          <RingProgress {...config.props} percent={data} />
        </Spin>
      </div>
    )
  );
};
export default forwardRef(MRingProgress);
