import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Mail, Lock, Loader2, ArrowLeft, ShieldCheck, Target } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(formData.email, formData.password);
      Swal.fire({
        icon: 'success',
        title: 'Access Granted',
        text: 'Welcome back to Khareedo.pk',
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#002f34'
      });
      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: error.message,
        confirmButtonColor: '#002f34'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-[#f8f9fb]">
      
      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-sm border border-gray-100 animate-fade-in relative overflow-hidden">
        
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
           <Target className="h-32 w-32 text-[#002f34]" />
        </div>

        <Link to="/" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-10 uppercase tracking-widest transition-colors group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Back to Terminal
        </Link>

        <div className="text-center mb-10">
           <div className="h-16 w-16 bg-[#002f34] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#002f34]/20">
              <ShieldCheck className="h-8 w-8 text-white" />
           </div>
           <h2 className="text-3xl font-black text-[#002f34] tracking-tight uppercase">Authentication</h2>
           <p className="mt-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] italic">Accessing Khareedo.pk Network</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Gateway Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@khareedo.pk"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Security Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full khareedo-btn py-4 shadow-md bg-gradient-to-r from-[#002f34] to-[#004f56]"
          >
            {isSubmitting ? (
               <div className="flex items-center justify-center">
                  <Loader2 className="h-5 w-5 animate-spin mr-3" />
                  <span className="uppercase font-black text-xs tracking-widest">Verifying...</span>
               </div>
            ) : (
               <span className="uppercase font-black text-xs tracking-widest">Enter Channel</span>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
           <button className="text-[9px] font-black text-gray-400 hover:text-khareedo-accent uppercase tracking-widest transition-colors mb-6">
              Forgot your access code?
           </button>
        </div>
        
        <div className="mt-6 text-center pt-8 border-t border-gray-50">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            New to the network?{' '}
            <Link to="/signup" className="text-khareedo-accent hover:underline font-black ml-1">
              JOIN KHAREEDO.PK
            </Link>
          </p>
        </div>
      </div>

       <div className="mt-12 opacity-30 text-[10px] font-black text-gray-400 flex gap-6">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 256-BIT SSL</div>
          <div className="flex items-center gap-2 uppercase tracking-tighter">Verified Official Platform</div>
       </div>
    </div>
  );
}
