import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Mail, Lock, User, Loader2, ArrowLeft, ShieldCheck, UserPlus } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({ 
        icon: 'error', 
        title: 'Validation Error', 
        text: 'Passwords do not match',
        confirmButtonColor: '#002f34'
      });
    }
    
    setIsSubmitting(true);
    try {
      await signup(formData.email, formData.password, formData.name);
      Swal.fire({
        icon: 'success',
        title: 'Welcome Aboard!',
        text: 'Your account has been successfully registered.',
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#002f34'
      });
      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
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
           <UserPlus className="h-32 w-32 text-[#002f34]" />
        </div>

        <Link to="/login" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-10 uppercase tracking-widest transition-colors group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Back to Entry
        </Link>

        <div className="text-center mb-10">
           <div className="h-12 w-12 bg-[#002f34] rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
              <UserPlus className="h-6 w-6 text-white" />
           </div>
           <h2 className="text-3xl font-black text-[#002f34] tracking-tight uppercase">Registry</h2>
           <p className="mt-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] italic">Join Pakistan's Elite Network</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Full Legal Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Official Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Unique Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Minimum 6 characters"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-khareedo-accent transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Repeat code"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-bold text-[#002f34] transition-all outline-none shadow-sm"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
            By establishing this account, you confirm adherence to our <a href="#" className="text-khareedo-accent underline">Terms of Service</a> and <a href="#" className="text-khareedo-accent underline">Privacy Protocols</a>.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full khareedo-btn py-4 shadow-lg bg-gradient-to-r from-[#002f34] to-[#004f56]"
          >
            {isSubmitting ? (
               <div className="flex items-center justify-center">
                  <Loader2 className="h-5 w-5 animate-spin mr-3" />
                  <span className="uppercase font-black text-xs tracking-widest">Processing...</span>
               </div>
            ) : (
               <span className="uppercase font-black text-xs tracking-widest">Create Channel</span>
            )}
          </button>
        </form>
        
        <div className="mt-12 text-center pt-8 border-t border-gray-50">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Already registered?{' '}
            <Link to="/login" className="text-khareedo-accent hover:underline font-black ml-1">
              LOGIN HERE
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
