document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    // Function to fetch and display events
    fetch('https://velour-scraper.s3.us-west-2.amazonaws.com/events.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(monthData => {
                for (const date in monthData) {
                    const events = monthData[date];
                    events.forEach(event => {
                        for (const time in event) {
                            const eventData = event[time];
                            // Create event item
                            const eventItem = document.createElement('div');
                            eventItem.classList.add('event-item');

                            // Create a container for the left side content
                            const leftContent = document.createElement('div');
                            leftContent.classList.add('event-left-content');

                            // Add event date
                            const eventDate = document.createElement('div');
                            eventDate.classList.add('event-date');
                            eventDate.textContent = formatDateString(date, time);
                            leftContent.appendChild(eventDate);
                            // Google Calendar button
                            const calendarButton = document.createElement('img');
                            calendarButton.src = '/images/google_cal.png';
                            calendarButton.alt = 'Add to Google Calendar';
                            calendarButton.classList.add('google-calendar-icon');
                            calendarButton.title = 'Add to Google Calendar';
                            calendarButton.addEventListener('click', () => {
                                addToGoogleCalendar(date, time, eventTitle.textContent, eventData.artists);
                            });

                            // Append calendar button to event item
                            leftContent.appendChild(calendarButton);

                            // Add event title (special notes)
                            const eventTitle = document.createElement('div');
                            eventTitle.classList.add('event-title');
                            eventTitle.textContent = eventData.special_notes;
                            leftContent.appendChild(eventTitle);

                            // Append left content to event item
                            eventItem.appendChild(leftContent);

                            // Create a container for the artists
                            const artistsContainer = document.createElement('div');
                            artistsContainer.classList.add('artists-container');

                            // Add artist links and images
                            eventData.artists.forEach((artist, index) => {
                                const artistDiv = document.createElement('div');
                                artistDiv.classList.add('artist-item');

                                const artistLink = document.createElement('a');
                                artistLink.href = eventData.spotify_data[index]?.artist.external_urls.spotify || '#';
                                artistLink.textContent = artist;
                                artistLink.classList.add('artist-link');
                                artistDiv.appendChild(artistLink);

                                if (eventData.spotify_data[index]?.artist.images[0]) {
                                    const artistImage = document.createElement('img');
                                    artistImage.src = eventData.spotify_data[index].artist.images[0].url;
                                    artistImage.alt = artist;
                                    artistImage.classList.add('artist-image');
                                    artistDiv.appendChild(artistImage);
                                }

                                artistsContainer.appendChild(artistDiv);
                            });
                            // Append artists container to event item
                            eventItem.appendChild(artistsContainer);

                            // Append event item to event list
                            eventList.appendChild(eventItem);
                        }
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });

    // Helper function to format date strings
    function formatDateString(dateString, day_of_month) {
        const month_number = dateString.substring(4, 6);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[parseInt(month_number) - 1];
        const year = dateString.substring(0, 4);
        const date = new Date(`${year}-${month}-${day_of_month}`);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
        return `${dayOfWeek.substring(0, 3)} ${month} ${day_of_month} 7:30 PM`;
    }

    // Function to add event to Google Calendar
    function addToGoogleCalendar(date, day, title, artists) {
        console.log("HELLO");
        console.log(date);
        const year = date.substring(0, 4);
        const month = date.substring(4, 6);
        console.log(month);
        const startDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day) + 1, 1, 30, 0)); // Set to 7:30 PM MDT (1:30 AM UTC)
        const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // Assuming 4-hour event duration
        const formattedStartDate = startDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const cal_title = title + " @ Velour: " + artists.join(", ");
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${formattedStartDate}%2F${formattedEndDate}&location=135%20N%20University%20Ave%2C%20Provo%2C%20UT%2084601&text=${encodeURIComponent(cal_title)}`;
        window.open(calendarUrl, '_blank');
    }
});