---
title: "Notify your sales team via Slack with Retool workflows"
date: 2024-09-17 07:04:00 +0100
subtitle: 17th September, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



> How to boost the sales team's efficiency?

Automating tasks such as data entry, report generation, and communication workflows frees up time for employees to focus on higher-value activities like strategy and innovation.

Automation not only reduces human error but also ensures consistency in operations, leading to more predictable outcomes.

Automating recurring internal operations is a key strategy for any organization aiming to maintain a competitive edge, improve efficiency, and create more time for innovation.



### Tools to automate recurring tasks

There are several tools out there that help automate activities and tasks. The popular no-code tools such as **Zapier** and **Make** are some of the most used, and for very good reasons.

However, they are usually good for simple flows with few steps, mainly because a no-code editor reaches some complexity very fast, making it very difficult to iterate and experiment, a typical limitation in many no-code tools.

Furthermore, **data transformation**, a very common task in any data automation, can become daunting in such tools.

A valid alternative to go beyond the simple 3-4 step automation is **Retool Workflows**.

It's the Retool suite to set and run automation flows, with the full power of the low-code paradigm of Retool, as well as the possibility to include any **Python** or **JavaScript** library out there.

In one sentence:

> It's simple enough for simple tasks, but with a full engine if you need to go beyond, and usually, you need to.



### Getting started with Retool Workflows 

Let's explore how you can leverage it to automate a simple yet crucial business process: **notifying your sales team about new high-value leads.**

You're a SaaS company that receives leads through a **Google Form**. You want to automatically notify your sales team via **Slack** when a high-value lead (potential deal size > 10,000) submits the form. Here's how you can set this up using Retool Workflows.



### An overview of the implementation

This are some hints about how to implement such automation. There are some parts not covered, such as the Slack connection. This should give an idea about how to create such data flow in Retool Workflows.

Use Retool Workflows to connect directly to your SQL or NoSQL database where support tickets are stored.

If using a third-party ticketing system, connect via API to fetch new tickets.

![](/assets/blog/notify-your-sales-team-via-slack-with-retool-workflows/01.jpeg)



Now we will be performing following tasks via code -

1. Iterate over support tickets / leads and filter out only tickets with high value , 
2. Check if a new ticket is available and if its been already assigned or not , 

If unassigned then assign the ticket to relevant team and notify them via slack , 

![](/assets/blog/notify-your-sales-team-via-slack-with-retool-workflows/03.jpg)

Now we can Schedule this workflow to run at regular intervals (e.g., every 10 minutes) to ensure new tickets are routed quickly.



```js
//extract high value tickets 
const newTickets = get_supportTickets.data.filter(t => t.amount >= 10000) || [];

// lets write a simple function to update database of support ticket to save information on which team is handling the ticket 

async function updateTicketAssignment(ticket,team){
  await updateSupportDb.trigger({
    additionalScope :{
      ticketData : ticket,
      assignToTeam : team
    }
  })
}

//lets create a function to send notification via slack
async function sendTeamNotification(team , text){
  await notifyTeam.trigger({
    additionalScope :{
      supportTeam : team,
      message : text
    }
  })
}


// lets create an  orchestrator to manage flow of assigning ticket 
async function assignToTeam(ticket, team) {

  const message = A new ticket has been assigned to you: Ticket ID ${ticket.id}
  try {
     await sendTeamNotification(team, message );
     await updateTicketAssignment(ticket, team);
    console.log(Ticket ${ticket.id} successfully assigned to ${team});
  } catch (error) {
    console.error(Failed to assign ticket ${ticket.id} to ${team}:, error);
  }
}

// iterate over tickets and assign new tickets to team 
function assignTickets(newTickets) {
  newTickets.forEach(async (ticket) => {
    if (ticket.assigned) {
      console.log("already assigned");
    } else if (ticket.priority === 'urgent') {
      await assignToTeam(ticket, 'Support Team A');
    } else if (ticket.category === 'billing') {
      await assignToTeam(ticket, 'Billing Team');
    } else {
      await assignToTeam(ticket, 'General Support');
    }
  });
}

newTickets.length > 0 ? assignTickets(newTickets) : console.log("no new tickets")
```

The above full code for easy copy/paste.





### Conclusion

There are several benefits to using Retool Workflows instead of no-code tools like Zapier or Make. Here are some relevant points:

**Increased Control**: Unlike Zapier, which relies on pre-built app integrations, Retool Workflows offers direct access to your internal databases, APIs, and systems. You control how data flows between systems, enabling deeper integrations.

**Complex Logic**: You can build workflows that include conditionals, loops, and complex branching. This is crucial for teams dealing with nuanced business rules or handling various data formats.

**Custom APIs and Data Handling**: With Retool Workflows, you’re not limited to predefined integrations. You can use custom APIs and data sources, making it easier to work with proprietary or non-mainstream systems.

**Cost Efficiency**: Zapier’s pricing model charges per task, which can become costly with high-volume workflows. Retool Workflows offers a more scalable pricing model, especially for teams that manage large amounts of data or require multiple workflows.

**Integrated with Retool Apps**: Since Retool Workflows is part of the broader Retool platform, you can easily integrate workflows with custom Retool apps. This ensures that data flows seamlessly between automated processes and internal tooling used by your team.