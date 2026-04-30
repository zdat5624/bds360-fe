'use client';

import { APP_ROUTES } from '@/config';
import { useAppTheme } from '@/hooks/use-app-theme';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const ForbiddenPage: React.FC = () => {
    // Lấy các token màu sắc từ hook (Giữ nguyên như bản 404)
    const { colorBgLayout, colorTextSecondary, borderRadius, colorBgContainer } = useAppTheme();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: colorBgLayout,
            padding: '24px'
        }}>
            <div style={{
                backgroundColor: colorBgContainer,
                padding: '48px',
                borderRadius: borderRadius,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
                <Result
                    status="403" // Đổi status thành 403 để Antd tự render icon cấm/khóa
                    title={<span style={{ fontWeight: 800 }}>403</span>}
                    subTitle={
                        <span style={{ color: colorTextSecondary }}>
                            Xin lỗi, bạn không có quyền truy cập vào trang này hoặc thao tác bị từ chối.
                        </span>
                    }
                    extra={
                        <Link href={APP_ROUTES.PUBLIC.HOME}>
                            <Button type="primary" size="large" shape="round">
                                Quay lại trang chủ
                            </Button>
                        </Link>
                    }
                />
            </div>
        </div>
    );
};

export default ForbiddenPage;