// Audio Menu Injection Script
// This script adds a beautiful audio dropdown menu to the existing navigation

(function() {
    'use strict';
    
    // Wait for the page to load
    function initAudioMenu() {
        // Find the navigation container
        const nav = document.querySelector('nav');
        if (!nav) {
            console.log('Navigation not found, retrying...');
            setTimeout(initAudioMenu, 500);
            return;
        }

        // Check if audio menu already exists
        if (document.querySelector('.audio-menu-container')) {
            return;
        }

        // Create the audio menu HTML
        const audioMenuHTML = `
            <div class="audio-menu-container" style="position: relative; display: inline-block;">
                <button class="audio-menu-button" style="
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: linear-gradient(135deg, #ec4899, #8b5cf6);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                ">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    Audio
                    <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.3s ease;">
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </button>
                
                <div class="audio-dropdown" style="
                    position: absolute;
                    top: 100%;
                    left: 0;
                    margin-top: 8px;
                    width: 320px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: all 0.3s ease;
                    z-index: 1000;
                    overflow: hidden;
                ">
                    <div style="padding: 16px;">
                        <a href="/vv-anthems.html" class="audio-menu-item" style="
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            padding: 12px;
                            border-radius: 8px;
                            text-decoration: none;
                            color: #374151;
                            transition: all 0.3s ease;
                            margin-bottom: 8px;
                        ">
                            <div style="
                                padding: 8px;
                                background: linear-gradient(135deg, #dbeafe, #e0e7ff);
                                border-radius: 8px;
                                transition: all 0.3s ease;
                            ">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
                                    <path d="M9 18V5l12-2v13"></path>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <circle cx="18" cy="16" r="3"></circle>
                                </svg>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; color: #1f2937; margin-bottom: 2px;">
                                    Viral Vocab Anthems
                                </div>
                                <div style="font-size: 12px; color: #6b7280;">
                                    25 Original Marketing Songs
                                </div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="opacity: 0; transition: opacity 0.3s ease;">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </a>
                        
                        <a href="/episode1.html" class="audio-menu-item" style="
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            padding: 12px;
                            border-radius: 8px;
                            text-decoration: none;
                            color: #374151;
                            transition: all 0.3s ease;
                        ">
                            <div style="
                                padding: 8px;
                                background: linear-gradient(135deg, #fce7f3, #f3e8ff);
                                border-radius: 8px;
                                transition: all 0.3s ease;
                            ">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2">
                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                    <line x1="12" y1="19" x2="12" y2="23"></line>
                                    <line x1="8" y1="23" x2="16" y2="23"></line>
                                </svg>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; color: #1f2937; margin-bottom: 2px;">
                                    Podcast Episode
                                </div>
                                <div style="font-size: 12px; color: #6b7280;">
                                    Viral Vocab Book Review
                                </div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="opacity: 0; transition: opacity 0.3s ease;">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </a>
                    </div>
                    
                    <div style="
                        background: linear-gradient(135deg, #f0f9ff, #faf5ff);
                        padding: 12px 16px;
                        border-top: 1px solid #e5e7eb;
                        text-align: center;
                    ">
                        <div style="font-size: 11px; color: #6b7280;">
                            🎵 Discover marketing through music & podcasts
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Find the best place to insert the audio menu
        const navLinks = nav.querySelectorAll('a');
        let insertTarget = null;

        // Try to find Contact link to insert before it
        for (let link of navLinks) {
            if (link.textContent.toLowerCase().includes('contact')) {
                insertTarget = link;
                break;
            }
        }

        // If no contact link, insert at the end
        if (!insertTarget && navLinks.length > 0) {
            insertTarget = navLinks[navLinks.length - 1];
        }

        if (insertTarget) {
            // Create a temporary div to hold our HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = audioMenuHTML;
            const audioMenuElement = tempDiv.firstElementChild;

            // Insert the audio menu
            insertTarget.parentNode.insertBefore(audioMenuElement, insertTarget);

            // Add event listeners
            const button = audioMenuElement.querySelector('.audio-menu-button');
            const dropdown = audioMenuElement.querySelector('.audio-dropdown');
            const chevron = button.querySelector('.chevron');
            const menuItems = audioMenuElement.querySelectorAll('.audio-menu-item');

            let isOpen = false;

            // Toggle dropdown
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                isOpen = !isOpen;
                
                if (isOpen) {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateY(0)';
                    chevron.style.transform = 'rotate(180deg)';
                } else {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(-10px)';
                    chevron.style.transform = 'rotate(0deg)';
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!audioMenuElement.contains(e.target)) {
                    isOpen = false;
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(-10px)';
                    chevron.style.transform = 'rotate(0deg)';
                }
            });

            // Add hover effects to menu items
            menuItems.forEach(item => {
                const arrow = item.querySelector('svg:last-child');
                const iconContainer = item.querySelector('div:first-child');
                
                item.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f9fafb';
                    arrow.style.opacity = '1';
                    iconContainer.style.transform = 'scale(1.1)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                    arrow.style.opacity = '0';
                    iconContainer.style.transform = 'scale(1)';
                });
            });

            // Add hover effect to button
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
            });

            console.log('Audio menu successfully added!');
        } else {
            console.log('Could not find suitable location for audio menu');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAudioMenu);
    } else {
        initAudioMenu();
    }

    // Also try after a short delay in case the page is still loading
    setTimeout(initAudioMenu, 1000);
})();

