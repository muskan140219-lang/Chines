import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  lang: 'en' | 'zh';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, lang, onClose }) => {
  if (!type) return null;
  const t = translations[lang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FFFFFF] border border-[#D8D0C3] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#706B64] hover:text-[#111111]"
          aria-label={t.modalClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-serif-luxury font-medium text-[#111111] mb-2">
          {type === 'privacy'
            ? (lang === 'zh' ? '隐私保护声明' : 'Privacy Notice')
            : (lang === 'zh' ? '住客须知与服务条款' : 'Terms of Stay')}
        </h3>

        <div className="w-8 h-[1px] bg-[#B79A62] mb-4" />

        <div className="text-xs sm:text-sm text-[#706B64] leading-relaxed space-y-4 font-sans-clean font-light">
          {type === 'privacy' ? (
            <>
              <p>
                {lang === 'zh'
                  ? '北京京泰龙国际大酒店高度重视宾客的隐私与个人信息保护。本官方网站所收集的任何预订咨询信息（包括姓名、联系方式、拟入住日期等），仅用于酒店前台及预订部门与您对接确认房态与服务事宜。'
                  : 'Jingtailong International Hotel values guest privacy and personal data protection. Any reservation inquiry details submitted via this website (such as contact information and travel dates) are strictly utilized by our front desk and reservation personnel to verify room availability and coordinate your stay.'}
              </p>
              <p>
                {lang === 'zh'
                  ? '我们绝不向任何未经授权的第三方出售或泄露宾客个人资料。如有任何关于个人数据保护的疑问，请直接致电前台总机：+86 10 6707 5888。'
                  : 'We do not sell or disclose guest information to unauthorized third parties. For questions regarding personal data protection, please contact our 24-hour desk at +86 10 6707 5888.'}
              </p>
            </>
          ) : (
            <>
              <p>
                {lang === 'zh'
                  ? '标准入住时间为每日 14:00 以后，退房时间为每日 12:00 以前。所有登记入住的宾客均须出示合法有效的中华人民共和国居民身份证或有效护照等身份证明文件。'
                  : 'Standard check-in begins at 14:00, and check-out is prior to 12:00. All guests checking into the property are required to present a valid government-issued photo ID or passport in accordance with local hospitality regulations.'}
              </p>
              <p>
                {lang === 'zh'
                  ? '客房预订与价格政策以最终前台或直接直连预订确认为准。如需特殊安排（如加床、无障碍需求或大型团队接待），请提前与预订团队沟通。'
                  : 'Room reservations, rates, and policies are subject to final confirmation with our reservation department. Special requirements (extra beds, accessibility, or group arrangements) should be communicated prior to arrival.'}
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#ECE7DD] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#111111] text-white text-xs uppercase tracking-wider font-medium"
          >
            {t.modalClose}
          </button>
        </div>
      </div>
    </div>
  );
};
