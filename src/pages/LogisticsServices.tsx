import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Shield, CheckCircle, Users, TrendingUp, Clock, MapPin, Phone, Mail } from 'lucide-react';

const LogisticsServices = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">خدماتنا اللوجستية</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: النقل بالشاحنات */}
        <Card>
          <CardHeader>
            <CardTitle><Truck className="mr-2 inline-block" /> النقل بالشاحنات</CardTitle>
            <CardDescription>حلول نقل موثوقة وفعالة لتلبية احتياجات عملك.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>أسطول حديث من الشاحنات</li>
              <li>تغطية واسعة النطاق</li>
              <li>تتبع الشحنات في الوقت الفعلي</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>

        {/* Card 2: التخزين والتوزيع */}
        <Card>
          <CardHeader>
            <CardTitle><Shield className="mr-2 inline-block" /> التخزين والتوزيع</CardTitle>
            <CardDescription>مرافق تخزين آمنة وحلول توزيع متكاملة.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>مستودعات حديثة ومجهزة</li>
              <li>إدارة المخزون بكفاءة</li>
              <li>توزيع سريع وموثوق</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>

        {/* Card 3: التخليص الجمركي */}
        <Card>
          <CardHeader>
            <CardTitle><CheckCircle className="mr-2 inline-block" /> التخليص الجمركي</CardTitle>
            <CardDescription>تخليص جمركي سريع وسهل لضمان وصول شحناتك في الوقت المحدد.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>إجراءات تخليص مبسطة</li>
              <li>خبرة في التعامل مع جميع أنواع الشحنات</li>
              <li>التزام باللوائح والقوانين</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>

        {/* Card 4: إدارة سلسلة الإمداد */}
        <Card>
          <CardHeader>
            <CardTitle><Users className="mr-2 inline-block" /> إدارة سلسلة الإمداد</CardTitle>
            <CardDescription>حلول متكاملة لإدارة سلسلة الإمداد بكفاءة وفعالية.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>تحسين العمليات اللوجستية</li>
              <li>تقليل التكاليف</li>
              <li>زيادة الكفاءة</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>

        {/* Card 5: حلول التجارة الإلكترونية */}
        <Card>
          <CardHeader>
            <CardTitle><TrendingUp className="mr-2 inline-block" /> حلول التجارة الإلكترونية</CardTitle>
            <CardDescription>حلول لوجستية متكاملة لدعم نمو تجارتك الإلكترونية.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>تكامل مع منصات التجارة الإلكترونية</li>
              <li>توصيل سريع وموثوق</li>
              <li>إدارة المرتجعات</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>

        {/* Card 6: الاستشارات اللوجستية */}
        <Card>
          <CardHeader>
            <CardTitle><Clock className="mr-2 inline-block" /> الاستشارات اللوجستية</CardTitle>
            <CardDescription>نقدم استشارات لوجستية لمساعدتك على تحسين أدائك وتقليل التكاليف.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>تحليل العمليات اللوجستية</li>
              <li>تحديد فرص التحسين</li>
              <li>تقديم حلول مخصصة</li>
            </ul>
            <Button className="mt-4">اكتشف المزيد</Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">تواصل معنا</h2>
        <div className="flex justify-center space-x-6">
          <div className="flex items-center">
            <MapPin className="mr-2 text-gray-600" />
            <span>العنوان: 123 شارع المثال، المدينة</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-gray-600" />
            <span>الهاتف: +1234567890</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 text-gray-600" />
            <span>البريد الإلكتروني: info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsServices;
