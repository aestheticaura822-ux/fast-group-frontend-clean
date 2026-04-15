const API_URL = 'https://fast-it-solutions-backend-production.up.railway.app/api';

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error: 'Network error. Please check if backend is running.' };
  }
};

export const submitJobApplication = async (formData, jobTitle) => {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('cnic', formData.cnic);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('jobTitle', jobTitle);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }
    
    const response = await fetch(`${API_URL}/apply`, {
      method: 'POST',
      body: formDataToSend
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error: 'Network error. Please check if backend is running.' };
  }
};

// Test backend connection
export const testBackend = async () => {
  try {
    const response = await fetch(`${API_URL}/test`);
    const data = await response.json();
    console.log('Backend test:', data);
    return data;
  } catch (error) {
    console.error('Backend not reachable:', error);
    return { message: 'Backend not running' };
  }
};