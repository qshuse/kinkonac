import type { Job } from './types';

export const jobListings: Job[] = [
  {
    id: 'job-1',
    slug: 'chuyen-vien-kinh-doanh',
    title: {
      vi: 'Chuyên Viên Kinh Doanh B2B',
      en: 'B2B Sales Executive',
      zh: 'B2B销售专员'
    },
    department: {
      vi: 'Phòng Kinh Doanh',
      en: 'Sales Department',
      zh: '销售部'
    },
    location: {
      vi: 'Bình Dương, Việt Nam',
      en: 'Binh Duong, Vietnam',
      zh: '越南平阳'
    },
    type: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      zh: '全职'
    },
    salary: {
      vi: '15.000.000 - 30.000.000 VNĐ',
      en: '$600 - $1200',
      zh: '15,000,000 - 30,000,000 越南盾'
    },
    description: {
      vi: 'Tìm kiếm và phát triển mạng lưới khách hàng doanh nghiệp trong ngành cơ khí, gia công laser. Tư vấn các giải pháp máy nén khí phù hợp với nhu cầu của khách hàng.',
      en: 'Search and develop a network of corporate clients in the mechanical and laser processing industry. Advise on air compressor solutions suitable for customer needs.',
      zh: '负责机械及激光加工行业的企业客户开发与维护，深入了解客户工况需求，提供专业的空压机选型方案与技术咨询服务。'
    },
    requirements: {
      vi: [
        'Tốt nghiệp Cao đẳng/Đại học chuyên ngành Quản trị Kinh doanh, Cơ khí, Điện hoặc liên quan.',
        'Có ít nhất 1 năm kinh nghiệm sales B2B, ưu tiên ngành máy móc công nghiệp.',
        'Kỹ năng giao tiếp, đàm phán và thuyết phục tốt.',
        'Sẵn sàng đi công tác khi có yêu cầu.'
      ],
      en: [
        'Graduated from College/University majoring in Business Administration, Mechanics, Electricity or related.',
        'At least 1 year of B2B sales experience, preferred in industrial machinery.',
        'Good communication, negotiation and persuasion skills.',
        'Willing to travel on business trips when required.'
      ],
      zh: [
        '大专及以上学历，工商管理、机械工程、电气自动化等相关专业优先。',
        '具备1年以上B2B销售经验，有工业设备行业背景者优先考虑。',
        '具备较强的沟通表达、商务谈判与客户关系维护能力。',
        '能适应短期出差，具备良好的抗压能力与团队协作精神。'
      ]
    },
    benefits: {
      vi: [
        'Lương cứng + Hoa hồng hấp dẫn (Không giới hạn).',
        'Thưởng Lễ, Tết, lương tháng 13.',
        'Được đào tạo chuyên sâu về kỹ thuật sản phẩm và kỹ năng sales.',
        'Môi trường làm việc trẻ trung, năng động, có cơ hội thăng tiến.',
        'Đóng BHXH, BHYT đầy đủ theo quy định của pháp luật.'
      ],
      en: [
        'Base salary + Attractive commission (Unlimited).',
        'Holiday bonuses, 13th month salary.',
        'In-depth training on product techniques and sales skills.',
        'Young, dynamic working environment with promotion opportunities.',
        'Full social insurance and health insurance according to the law.'
      ],
      zh: [
        '底薪 + 丰厚业务提成（上不封顶）。',
        '享有节假日奖金及年终十三薪。',
        '入职即享系统化的产品技术培训及销售技能提升课程。',
        '扁平化管理，晋升通道清晰，优秀者可快速成长为区域负责人。',
        '依法缴纳五险，享受带薪年假等法定福利。'
      ]
    },
    datePosted: '2024-05-15'
  },
  {
    id: 'job-2',
    slug: 'ky-thuat-vien-bao-tri',
    title: {
      vi: 'Kỹ Thuật Viên Bảo Trì Máy Nén Khí',
      en: 'Air Compressor Maintenance Technician',
      zh: '空压机维修技术员'
    },
    department: {
      vi: 'Phòng Kỹ Thuật',
      en: 'Technical Department',
      zh: '技术部'
    },
    location: {
      vi: 'Bình Dương, Việt Nam',
      en: 'Binh Duong, Vietnam',
      zh: '越南平阳'
    },
    type: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      zh: '全职'
    },
    salary: {
      vi: '12.000.000 - 20.000.000 VNĐ',
      en: '$500 - $800',
      zh: '12,000,000 - 20,000,000 越南盾'
    },
    description: {
      vi: 'Thực hiện lắp đặt, bảo hành, bảo trì, và sửa chữa hệ thống máy nén khí tại nhà máy của khách hàng. Hỗ trợ giải đáp các thắc mắc kỹ thuật cho khách hàng.',
      en: 'Perform installation, warranty, maintenance, and repair of air compressor systems at customers factories. Support in answering technical queries for customers.',
      zh: '负责空压机系统的现场安装、调试、定期保养及故障排查，驻场或上门为客户提供专业售后技术支持。'
    },
    requirements: {
      vi: [
        'Tốt nghiệp Trung cấp/Cao đẳng chuyên ngành Cơ điện tử, Điện công nghiệp, hoặc Cơ khí.',
        'Có kinh nghiệm bảo trì hệ thống khí nén là một lợi thế.',
        'Đọc hiểu tài liệu kỹ thuật cơ bản.',
        'Có sức khỏe tốt, trung thực, cẩn thận và có trách nhiệm với công việc.'
      ],
      en: [
        'Graduated from Intermediate/College majoring in Mechatronics, Industrial Electricity, or Mechanics.',
        'Experience in maintaining compressed air systems is an advantage.',
        'Ability to read and understand basic technical documents.',
        'Good health, honest, careful and responsible at work.'
      ],
      zh: [
        '中专及以上学历，机电一体化、电气自动化、机械制造等相关专业。',
        '有压缩空气系统维保经验者优先录用。',
        '能看懂基本电气原理图及设备技术手册。',
        '身体素质良好，工作踏实认真，具备高度责任心。'
      ]
    },
    benefits: {
      vi: [
        'Lương cơ bản + Phụ cấp đi lại, công tác phí.',
        'Thưởng KPIs và hiệu quả công việc.',
        'Được cử đi đào tạo tại nhà máy sản xuất của hãng.',
        'Đóng BHXH, BHYT đầy đủ.'
      ],
      en: [
        'Basic salary + Travel allowance, per diem.',
        'KPIs and performance bonuses.',
        'Sent for training at the manufacturers production plant.',
        'Full social insurance and health insurance.'
      ],
      zh: [
        '基本工资 + 交通补贴 + 出差补助。',
        'KPI达标奖金及年度绩效奖励。',
        '定期安排赴厂家总部接受专业技术培训。',
        '依法缴纳五险，享受法定节假日及带薪年假。'
      ]
    },
    datePosted: '2024-05-10'
  }
];
